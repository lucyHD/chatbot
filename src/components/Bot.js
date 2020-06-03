import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import {Robot} from './robot4.png';


const theme = {
    background: '#f5f8fb',
    fontFamily: 'Arial',
    headerBgColor: '#4a4a4a',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#00FA9A',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };

const Bot =() => {

    const steps = [
      {
        id: 1,
        message: "what is your name?",
        trigger: '2',
        

      }, 

      {
        id: 2,
        user: true,
        trigger: '3',
        avatar: Robot
      }, 

      {
        id: 3,
        message: "Hi {previousValue}, welcome to chatbox",
        trigger: '4'

      },
      {
        id:4,
        message: ({previousValue}) => 'want to chat more?', 
        trigger: '5'
      },
      {
        id: 5,
        options: [
            {value: 1, label: 'Yes', trigger: '6'},
            {value: 2, label: 'No', trigger: '7'}
        ]
      },
      {
        id: 6,
        message: 'Woohoo! Want do you want to talk about?',
        end: true
      },
      {
          id: 7,
          message: "Don't leave me!",
          end: true
      },


      
    ]
    return(
        
        <ThemeProvider theme={theme}>
            <ChatBot 
              steps={steps} 
              botAvatar="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/HMZU2?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1570128716901" 
              userAvatar="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSmf1IehUpT0F3sb_ul7oYLVuppvu2PH--9cj-ThZwaS3jHTfRj&usqp=CAU"
              floating={true}
              headerTitle="Here to assist you!"
              placeholder="enter....if ye dare"
            /> 
            
        </ThemeProvider> 

        
    )

}
    

export default Bot;