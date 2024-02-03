import React from 'react';
import { Checkbox, Grid, Header, Icon, Image, Menu, Segment, Sidebar, Button } from 'semantic-ui-react';

const SideMenu = () => {
  const [visible, setVisible] = React.useState(false)

  return (
    <>
      <Checkbox
        checked={visible}
        label={{ children: <code>visible</code> }}
        onChange={(e, data) => setVisible(data.checked)}
      />
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation='push'
          icon='labeled'
          onHide={() => setVisible(false)}
          vertical
          visible={visible}
          width='very thin'
        >
          <Menu.Item as={Button}>
            <Icon name='home' />
          </Menu.Item>
          <Menu.Item as={Button}>
            <Icon name='gamepad' />
          </Menu.Item>
          <Menu.Item as={Button}>
            <Icon name='camera' />
          </Menu.Item>
        </Sidebar>
        <Sidebar
          as={Menu}
          animation='push'
          icon='labeled'
          vertical
          visible={!visible}
          width='thin'
        >

          <Menu.Item
            as={Button}
            icon
            labelPosition='left'
            color='teal'>
            <Icon name='home' /> Home
            </Menu.Item>
          <Menu.Item
            as={Button}
            icon
            labelPosition='left'
            color='teal'>
            <Icon name='gamepad' />Games</Menu.Item>
          <Menu.Item
            as={Button}
            icon
            labelPosition='left'
            color='teal'>
            <Icon name='camera' />Channels</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher>
          <Segment basic>
            <Header as='h3'>Application Content</Header>
            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  )
}

export default SideMenu