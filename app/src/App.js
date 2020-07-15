import React, { useState } from 'react'
import { useAragonApi } from '@aragon/api-react'
import {
  Box,
  Button,
  GU,
  Header,
  IconMinus,
  IconPlus,
  Main,
  SyncIndicator,
  Tabs,
  Text,
  TextInput,
  textStyle,
} from '@aragon/ui'
import styled from 'styled-components'

function App() {
  const { api, appState, path, requestPath } = useAragonApi()
  const { count, isSyncing } = appState

  const [bladeRunnerAddress, setBladeRunnerAddress] = useState('0x8EEaea23686c319133a7cC110b840d1591d9AeE0')
  const [botReward, setBotReward] = useState()
  const [memberID, setMemberID] = useState()
  const [selected, setSelected] = useState(0)

  const pathParts = path.match(/^\/tab\/([0-9]+)/)
  const pageIndex = Array.isArray(pathParts)
    ? parseInt(pathParts[1], 10) - 1
    : 0
  console.log("selected", selected);
  return (
    <Main>
      {isSyncing && <SyncIndicator />}
      <Header
        primary="BladerunnerDAO"
        secondary={
          <span
            css={`
              ${textStyle('title2')}
            `}
          >
            ⚡🐑
          </span>
        }
      />
      
 
      <Tabs
        items={['Settings', 'Members']}
        selected={selected}
        onChange={setSelected}
      />

      {/* 
      <Tabs
        items={['Tab 1', 'Tab 2']}
        selected={pageIndex}
        onChange={index => requestPath(`/tab/${index + 1}`)}
      />
      <Box
        css={`
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          // height: ${50 * GU}px;
          ${textStyle('title3')};
        `}
      >
        Count: {count}
        <Buttons>
          <Button
            display="icon"
            icon={<IconMinus />}
            label="Decrement"
            onClick={() => api.decrement(1).toPromise()}
          />
          <Button
            display="icon"
            icon={<IconPlus />}
            label="Increment"
            onClick={() => api.increment(1).toPromise()}
            css={`
              margin-left: ${2 * GU}px;
            `}
          />
          </Buttons>
      </Box> */}
      
      {selected == 0 ? (
        <Box
        css={`
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          // height: ${50 * GU}px;
          ${textStyle('title3')};
        `}
      >
          Settings <br />
          <div>
            <TextInput
              placeholder="sdfsdf"
              value={bladeRunnerAddress}
              onChange={event => {
                setBladeRunnerAddress(event.target.value)
              }}
            />
            <Button
              label="Attach Bladerunner"
              onClick={() => api.attachBladeRunner(bladeRunnerAddress).toPromise()}
              css={`
                margin-left: ${2 * GU}px;
              `}
            />
          </div>
          <div></div>
          <div>
          <TextInput
            placeholder="sdfsdf"
            value={bladeRunnerAddress}
            onChange={event => {
              setBladeRunnerAddress(event.target.value)
            }}
          />
          <Button
            label="Change owner"
            onClick={() => api.attachBladeRunner(bladeRunnerAddress).toPromise()}
            css={`
              margin-left: ${2 * GU}px;
            `}
          />
          </div>
      </Box>
      ) : ""}

      
      
      {selected == 1 ? (
      <Box
        css={`
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          // height: ${50 * GU}px;
          ${textStyle('title3')};
        `}
      >
          Manage members <br />
          <TextInput
            placeholder="Bot reward"
            // value={botReward}
            onChange={event => {
              setBotReward(event.target.value)
            }}
          />
          <TextInput
            placeholder="Member Upala ID"
            // value={memberID}
            onChange={event => {
              setMemberID(event.target.value)
            }}
          />
          <Button
            label="Set Bot Reward"
            onClick={() => api.announceAndSetBotReward(botReward).toPromise()}
            css={`
              margin-left: ${2 * GU}px;
            `}
          />
      </Box>
      ) : ""}

    </Main>
  )
}

const Buttons = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 40px;
  margin-top: 20px;
`

export default App
