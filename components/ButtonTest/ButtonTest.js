import { StyleSheet, Button } from 'react-native'

const styles = StyleSheet.create({
    button: {
        color: "red"
    },
});

const ButtonTest = () => {
    return (
        <Button styles={styles.button}
            title="Press me" />
    )
}

export default ButtonTest