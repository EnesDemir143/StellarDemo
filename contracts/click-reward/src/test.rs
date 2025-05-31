#![cfg(test)]

use super::*;
use soroban_sdk::{
    symbol_short,
    testutils::{Address as _, AuthorizedFunction, AuthorizedInvocation},
    vec, Address, Env, IntoVal,
};

#[test]
fn test_click_reward() {
    let e = Env::default();
    let admin = Address::generate(&e);
    let user = Address::generate(&e);
    let token = Address::generate(&e);

    let contract_id = e.register_contract(None, ClickReward);
    let client = ClickRewardClient::new(&e, &contract_id);

    // Initialize contract
    client.initialize(&admin, &token);

    // Test click function
    let reward = client.click(&user);
    assert_eq!(reward, REWARD_PER_CLICK);

    // Test user stats
    let stats = client.get_user_stats(&user);
    assert_eq!(stats.clicks, 1);
    assert_eq!(stats.total_rewards, REWARD_PER_CLICK);

    // Test multiple clicks
    let reward2 = client.click(&user);
    assert_eq!(reward2, REWARD_PER_CLICK);

    let stats = client.get_user_stats(&user);
    assert_eq!(stats.clicks, 2);
    assert_eq!(stats.total_rewards, REWARD_PER_CLICK * 2);

    // Test get_token and get_admin
    assert_eq!(client.get_token(), token);
    assert_eq!(client.get_admin(), admin);
} 