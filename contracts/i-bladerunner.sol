pragma solidity ^0.4.24;

// Minimal interface for all score providers (not used in prototype)
interface IBladeRunner {
    function announceAndSetBotReward(uint256) external;
    function isBladerunner() external returns(bool);
}