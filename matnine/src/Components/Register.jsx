import { TextInput, Checkbox, Button, Group, Box, Text, PasswordInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { auth } from '../Database/FirebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth'
export function Register() {

    const [pass, setPass] = useState('');
    const [email, setEmail] = useState('');
    const form = useForm({
        initialValues: {
            email: '',
            password: '',
            termsOfService: false,
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });
    const register = (event) => {
        event.preventDefault();
        console.log(email, pass)
        createUserWithEmailAndPassword(auth, email, pass)
            .then((userCredentials) => { console.log(userCredentials) })
            .catch((error) => console.log(error))
    }

    return (
        <Box maw={300} mx="auto">
            <Text fz="md">Register</Text>

            <form onSubmit={
                register
            }>

                <TextInput
                    withAsterisk
                    type='email'
                    label="Email"
                    placeholder="your@email.com"
                    required
                    onChange={(event) => { setEmail(event.currentTarget.value) }}

                />
                <PasswordInput
                    value={pass}
                    onChange={(event) => setPass(event.currentTarget.value)}
                // {...form.getInputProps('password')}
                />

                <Checkbox
                    mt="md"
                    label="I agree to sell my privacy"
                    {...form.getInputProps('termsOfService', { type: 'checkbox' })}
                />

                <Group position="right" mt="md">
                    <Button type="submit">Submit</Button>
                </Group>
            </form>
        </Box>
    );
}