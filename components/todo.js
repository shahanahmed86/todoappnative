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
        if (message) {
            if (editing) {
                this.props.onEditTodo(message, index)
            }
            else {
                this.props.onAddTodo(message);
            }
            this.onNew();
        }
        else {
            alert('Please enter some text');
        }
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
                    <View style={styles.headerBox}>
                        <View>
                            <Text style={{ fontSize: 24 }}>Todo App with Redux</Text>
                        </View>
                        <View style={styles.headerSibling}>
                            <TextInput
                                style={styles.textBox}
                                placeholder='Write your things to do'
                                value={message}
                                onChangeText={message => this.setState({ message })}
                            />
                            <View style={styles.buttonStyle}>
                                <Button
                                    onPress={this.onSubmitHandler}
                                    color={editing ? 'purple' : 'green'}
                                    title={editing ? 'Update' : 'Add'}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.todosBox}>
                        {todo.map((val, ind) => {
                            return (
                                <View key={ind} style={styles.todosFlexBoxes}>
                                    <Text>{1 + parseInt(ind)}</Text>
                                    <View style={styles.todoInnerBox}>
                                        <Text>{val}</Text>
                                    </View>
                                    <View>
                                        <View style={{ width: 75, marginTop: 5 }}>
                                            <Button
                                                color='purple'
                                                title='Edit'
                                                onPress={() => this.getRow(ind)}
                                            />
                                        </View>
                                        <View style={{ width: 75, marginTop: 5, marginBottom: 5 }}>
                                            <Button
                                                color='red'
                                                title='Delete'
                                                onPress={() => this.onDelete(ind)}
                                            />
                                        </View>
                                    </View>
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
        width: '100%',
        backgroundColor: '#F5FCFF',
    },
    headerBox: {
        flex: 1,
        alignItems: 'center',
    },
    headerSibling: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    textBox: {
        height: 35,
        width: 250,
        padding: 2,
        paddingLeft: 10,
        borderWidth: 1,
        borderColor: 'black',
    },
    buttonStyle: {
        width: 75,
    },
    todosBox: {
        flex: 1,
        marginTop: 35,
    },
    todosFlexBoxes: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderColor: 'lightblue',
        borderWidth: 2,
        margin: 2,
    },
    todoInnerBox: {
        flex: 1,
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        maxWidth: 150,
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);