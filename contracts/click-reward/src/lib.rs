#![no_std]

use soroban_sdk::{
    contract, contractimpl, contracttype, symbol_short, Address, Env,
    token::TokenClient,
};

const REWARD_PER_CLICK: i128 = 100_000_000; // 0.1 token (7 decimals)

#[contracttype]
#[derive(Clone, Debug, Eq, PartialEq)]
pub struct UserStats {
    pub clicks: u32,
    pub total_rewards: i128,
}

#[contract]
pub struct ClickReward;

#[contractimpl]
impl ClickReward {
    pub fn initialize(e: &Env, admin: Address, token: Address) {
        e.storage().instance().set(&symbol_short!("admin"), &admin);
        e.storage().instance().set(&symbol_short!("token"), &token);
    }

    pub fn click(e: &Env, user: Address) -> i128 {
        // Kullanıcı istatistiklerini al veya oluştur
        let mut stats: UserStats = e
            .storage()
            .instance()
            .get(&(symbol_short!("stats"), user.clone()))
            .unwrap_or(UserStats {
                clicks: 0,
                total_rewards: 0,
            });

        // Tıklama sayısını artır
        stats.clicks += 1;
        
        // Ödül miktarını hesapla (her tıklama için 0.1 token)
        let reward = REWARD_PER_CLICK;
        stats.total_rewards += reward;

        // İstatistikleri güncelle
        e.storage()
            .instance()
            .set(&(symbol_short!("stats"), user.clone()), &stats);

        // Token'ı kullanıcıya gönder
        let token = e.storage().instance().get(&symbol_short!("token")).unwrap();
        let admin = e.storage().instance().get(&symbol_short!("admin")).unwrap();
        
        // Token transfer işlemi (invoker admin olmalı)
        let token_client = TokenClient::new(e, &token);
        token_client.transfer(&admin, &user, &reward);

        reward
    }

    pub fn get_user_stats(e: &Env, user: Address) -> UserStats {
        e.storage()
            .instance()
            .get(&(symbol_short!("stats"), user))
            .unwrap_or(UserStats {
                clicks: 0,
                total_rewards: 0,
            })
    }

    pub fn get_token(e: &Env) -> Address {
        e.storage().instance().get(&symbol_short!("token")).unwrap()
    }

    pub fn get_admin(e: &Env) -> Address {
        e.storage().instance().get(&symbol_short!("admin")).unwrap()
    }
}

#[cfg(test)]
mod test;
