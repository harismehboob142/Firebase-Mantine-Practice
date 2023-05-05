import React, { useState } from 'react'
import { useDisclosure } from '@mantine/hooks'
import { Burger, Avatar, ColorInput, Chip, Autocomplete, Button, Kbd } from '@mantine/core'


const CustomButtom = () => {

    const [color, setColor] = useState('')
    const [chip, setChip] = useState(false)
    const [opened, { toggle }] = useDisclosure(false);
    const label = opened ? 'Close navigation' : 'Open navigation';

    const data = [
        { label: 'index0', desc: 'desc0' },
        { label: 'index1', desc: 'desc1' },
        { label: 'index2', desc: 'desc2' },
        { label: 'index3', desc: 'desc3' },
        { label: 'index4', desc: 'desc4' },
        { label: 'index5', desc: 'desc5' },
    ]

    return (
        <div>
            <Avatar src='/src/Assets/rl.jpg' radius='lg' />
            <Autocomplete sx={{ margin: '20px' }} label='Choose a number' placeholder='numbers' data={['1', '2', '3', '4']} />

            <Button>Login</Button>

            <Chip checked={chip} onChange={() => { setChip(value => !value) }} sx={{ margin: 20 }}>{chip ? 'Chip' : 'Not Chip'}</Chip>
            <ColorInput value={color} onChange={(e) => {
                setColor(e)
                console.log(color);
            }} placeholder='pick a color' label='choose a color'>

            </ColorInput>

            <Burger opened={opened} onClick={toggle} aria-label={label} color='#ffff' sx={{ margin: 20 }} />
            {/* {
                data.map((item, index) => {
                    console.log({ 'item': item, 'index': index })
                })
            } */}
            <Kbd>CTRL</Kbd> + <Kbd>R</Kbd>

        </div>
    )
}

export default CustomButtom;