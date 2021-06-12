import styled from '@emotion/styled'
import { FileWithPath, useDropzone } from 'react-dropzone'
import {
  Text,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  theme,
  UnorderedList,
} from '@chakra-ui/react'
import { css } from '@emotion/react'

function HomePage() {
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragAccept,
  } = useDropzone({
    accept: 'image/jpeg, image/png',
  })

  const files = acceptedFiles.map((file: FileWithPath) => (
    <ListItem key={file.path}>
      {file.path} - {file.size} bytes
    </ListItem>
  ))

  return (
    <HomePageBlock>
      <Container>
        <Title>S3 파일 업로드</Title>

        <UploadZone {...getRootProps()} isDragAccept={isDragAccept}>
          <input {...getInputProps()} />
          <p>여기에 파일을 드랍하거나, 클릭하여 파일을 찾아보세요.</p>
        </UploadZone>

        <FileAside>
          <Text fontSize="lg">업로드할 파일 목록</Text>
          <UnorderedList>{files}</UnorderedList>
        </FileAside>

        <Tabs variant="enclosed">
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </HomePageBlock>
  )
}

const HomePageBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: url('https://mcdn.wallpapersafari.com/medium/10/85/VL9trM.jpg');
  background-repeat: no-repeat;
`

const Title = styled.h1`
  font-size: 36px;
  font-weight: 500;
  text-align: center;
  margin: 0 0 16px 0;
  color: ${theme.colors.gray[900]};
`

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 100%;
  background-color: white;
  border-radius: 24px;
  padding: 24px;
`

const UploadZone = styled.div<{ isDragAccept: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.gray[400]};
  padding: 0 24px;
  border-width: 2px;
  border-radius: 24px;
  border-color: ${theme.colors.blue[100]};
  border-style: dashed;
  outline: none;
  cursor: pointer;
  transition: border 0.24s ease-in-out;
  height: 128px;

  ${({ isDragAccept }) =>
    isDragAccept &&
    css`
      border-color: ${theme.colors.blue[400]};
    `}

  &:hover {
    border-color: ${theme.colors.blue[400]};
  }
`

const FileAside = styled.aside`
  margin: 24px 0;
  height: 120px;
  overflow-y: auto;
`

export default HomePage
