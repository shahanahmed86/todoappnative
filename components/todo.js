//Basic Components
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Button, Text, TextInput,
} from 'react-native';
import { connect } from 'react-redux';

//store
import allMethods from '../store/reducer/action';

const mapStateToProps = store => {
    return {
        state: store,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchData: data => dispatch(allMethods.onFetchData(data)),
    }
}

class TodoApp extends Component {
    constructor() {
        super();
        this.state = {
            message: '',
            editing: false,
        }
    }

    onSubmitHandler = () => {
        alert('shahan')
    }

    render() {
        console.log(this.props.state);
        const { message, editing } = this.state;
        return (
            <View>
                <Text>
                    Todo App with React Native
                </Text>
                <TextInput
                    style={styles.textBox}
                    placeholder='Write your things to do'
                    value={message}
                    onChangeText={message => this.setState({ message })}
                />
                <Button
                    onPress={this.onSubmitHandler}
                    color={editing ? 'purple' : 'green'}
                    title={editing ? 'Update' : 'Add'}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textBox: {
        borderColor: 'black',
        borderWidth: 1,
        margin: 3,
        padding: 5
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);