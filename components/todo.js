//Basic Components
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Button, Text, TextInput,
    ScrollView,
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
        onAddTodo: message => dispatch(allMethods.onAddTodo(message)),
        onEditTodo: (message, ind) => dispatch(allMethods.onEditTodo(message, ind)),
        onDeleteTodo: ind => dispatch(allMethods.onDeleteTodo(ind)),
    }
}

class TodoApp extends Component {
    constructor() {
        super();
        this.state = {
            message: '',
            editing: false,
            index: '',
        }
    }

    onNew = () => {
        this.setState({
            message: '',
            editing: false,
            index: '',
        });
    }

    onSubmitHandler = () => {
        const { message, editing, index } = this.state;
        if (editing) {
            this.props.onEditTodo(message, index)
        }
        else {
            this.props.onAddTodo(message);
        }
        this.onNew();
    }

    onDelete = ind => {
        this.props.onDeleteTodo(ind);
        this.onNew();
    }

    getRow = index => {
        this.setState({
            message: this.props.state.todo[index],
            index,
            editing: true,
        })
    }

    render() {
        const { message, editing } = this.state;
        const { todo } = this.props.state;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <View>
                            <Text style={{ fontSize: 24 }}>Todo App with Redux</Text>
                        </View>
                        <View>
                            <TextInput
                                style={styles.textBox}
                                placeholder='Write your things to do'
                                value={message}
                                onChangeText={message => this.setState({ message })}
                            />
                            <View>
                                <Button
                                    onPress={this.onSubmitHandler}
                                    color={editing ? 'purple' : 'green'}
                                    title={editing ? 'Update' : 'Add'}
                                />
                            </View>
                        </View>
                    </View>
                    <View>
                        {todo.map((val, ind) => {
                            return (
                                <View key={ind}>
                                    <Text>{1 + parseInt(ind)}</Text>
                                    <Text>{val}</Text>
                                    <Button
                                        color='purple'
                                        title='Edit'
                                        onPress={() => this.getRow(ind)}
                                    />
                                    <Button
                                        color='red'
                                        title='Delete'
                                        onPress={() => this.onDelete(ind)}
                                    />
                                </View>
                            );
                        })}
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '85%',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F5FCFF',
    },
    textBox: {
        borderWidth: 1,
        borderColor: 'black',
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);