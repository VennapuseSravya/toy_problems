
import React from 'react';
import {View, Button, Text, ScrollView, ImagePropTypes,StyleSheet} from 'react-native';
import { TextInput, Input, CheckBox,ListItem} from 'react-native';


const styles = StyleSheet.create({
  todo:{
    
    alignItems:'center',
    backgroundColor: "#e6ffb3",
    color: "#446600",
    paddingTop:30,

  },
  margin:{
    paddingTop:30,
    marginTop: 50,
    textAlign: "center",
    
  },
  title: {
    marginTop:50,
    backgroundColor: "#993333",
    color: "#ffffff",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  }
  
})


function Task(props) {
  console.log(props);
  console.log(props.status);
  return (
    <View style = {styles.todo}>
    <Text > {props.name}, Current-time: {props.currentTime.toLocaleTimeString()} Duedate:{props.dueDate.toLocaleDateString()}   </Text>
    <CheckBox title = 'ClickHere' value = {props.status}  onValueChange = {() => props.onChange()}/> 
    <Button value = "Delete" title="bin" onPress = {() =>
      props.onDelete()}/>
  
 </View>
  )
}




export default class TodoList extends React.Component{
  constructor(){
    super();
    this.state = {list: [] };
    this.handleAddTask = this.handleAddTask.bind(this);
    
  }
    handleAddTask(task) {
    console.log("add task clicked");
    this.state.list.push(task);
    this.setState({list: this.state.list})
    
  }
  handleDeleteTask = (taskId) => {
  console.log('delete button clicked');
  const list = this.state.list.filter((t) => t.id !== taskId);
  this.setState({ list: list });
  
  };

  handleCheck = (taskId) => {
  console.log('checkbox clicked');
  console.log(taskId);
  let tmp = this.state.list;
  tmp[taskId].status = !tmp[taskId].status
  console.log(tmp)
  this.setState({
    list: tmp
  });
  };
  render() {
    return (
        <View>
            <Text style={styles.title}>Todo List</Text>
            <ScrollView>
                {
                    this.state.list.map((t,index) =>
                        <Task key={t.id} name={t.name} dueDate={t.endDate}  currentTime={t.dueDate}              
                              onChange={() => this.handleCheck(index)}
                              onDelete={() => this.handleDeleteTask(t.id)}
                              status = {t.status} index ={index} />
                    )
                }
            </ScrollView>
            <TaskNameForm onAddTask={this.handleAddTask} />
        </View>
    );
}
}


class TaskNameForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  clearText(){
    this.setState({value:""})
  }

  handleSubmit(event) {
      // create a task object
     
      event.preventDefault();
      const task = {id:Date.now(), name: this.state.value, 
      dueDate: new Date(),endDate:new Date(Date.now()),status : false};
      // add the task object to the task list
      this.props.onAddTask(task);
      this.clearText();
  }
  handleChange = (text) => {
    this.setState({ value: text })
  }
  render() {
      return(
          <View style={styles.margin}>
              <TextInput type="text" value={this.state.value}
          onChangeText={this.handleChange} placeholder="Write the task here.." />
        <Button  type="submit" title="Add Task" onPress={this.handleSubmit} />
      </View>
      );
  }
}