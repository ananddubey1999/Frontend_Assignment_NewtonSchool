import React, {Component, useState} from "react";
import '../styles/App.css';
import moment from 'moment';

export default function App() {
  let[selectedDate,setSelectedDate] = useState(moment());
  let[showYearInput,setShowYearInput] = useState(true);
  const daysInMonth = () => selectedDate.daysInMonth();
  const selectedCurrentDate = () => selectedDate.get("date");
  const gapsToBeLeft = () => moment(selectedDate).startOf('month').format('d');

  let completeTable = [];
  let oneRow = [];
  let totalCells = [];
  let cellNumber = 1;

  for(let i = 0;i<gapsToBeLeft() ; i++)
  {
    const id = "cell" + cellNumber;
    totalCells.push(<td className = "border border-secondary" key={cellNumber} id ={id}>{""}</td>) , cellNumber++;
  }
  for(let i = 1;i<=daysInMonth(); i++)
  {
    const id = "cell" + cellNumber;
    if(i===selectedCurrentDate())
    totalCells.push(<td className = "border border-secondary bg-info" key={cellNumber} id ={"today"}>{i}</td>);
    else
    totalCells.push(<td className = "border border-secondary" key={cellNumber} id ={id}>{i}</td>);
    cellNumber++;
  }

  for(let i = Number(gapsToBeLeft())+Number(daysInMonth());i%7!==0;i++)
    {
      const id = "cell" + cellNumber;
      totalCells.push(<td className = "border border-secondary" key={cellNumber} id ={id}>{""}</td>) , cellNumber++;
    }

  totalCells.forEach((cell, i)=>{
    if(i%7 !== 0)
    {
      oneRow.push(cell);
    }
    else
    {
      let currRow = oneRow.slice();
      completeTable.push(<tr className = "border border-secondary"key = {i*109+2}>{currRow}</tr>);
      oneRow = [];
      oneRow.push(cell);
    }
    if(i === totalCells.length - 1)
    {
      let currRow = oneRow.slice();
      completeTable.push(<tr key = {i*109+2}>{currRow}</tr>);
    }
  })

  const alterYear = (year) => {
    let dateContext = Object.assign({}, selectedDate);
    dateContext = moment(dateContext).set("year",year);
    setSelectedDate(dateContext);
  }

  const setMonth = (month) => {
        let dateContext = Object.assign({}, selectedDate);
        dateContext = moment(dateContext).set("month", month);
        setSelectedDate(dateContext);
      }
      
  return (
    <div id="main">
    <div className = "container">
    <div className = "mx-auto">
      <h1 id = "heading">Calendar</h1>
    <div className = "d-flex justify-content-around">
      <select id = "month" value = {selectedDate.format("MMMM")} onChange={(e)=> {setMonth(moment.months().indexOf(e.target.value))}}>
        {
          moment.months().map((data)=>{
            return(
              <option id = {data} key={data}>
                  {data}
              </option >
            )
          })
        }
      </select >
      {
        showYearInput ?
        <span id = "year" onDoubleClick={(e)=>{setShowYearInput(false)}}>  
        {selectedDate.format("Y")}          
        </span>
        :
        <input id = "year-text-box" defaultValue = {selectedDate.format("Y")}
          onKeyUp = {(e)=>{
            if(e.which===13) 
            {setShowYearInput(true)}
          }}
          onChange = {(e)=>{alterYear(e.target.value)}}
        >
        </input>
      }
    </div>
    <hr className = "w-75">
    </hr>
    <table className="mx-auto w-75">
      <tbody >
        <tr className="bg-dark text-light">
          {moment.weekdaysShort().map((day)=>{
            cellNumber++;
            const id = "month"+cellNumber;
            return (
              <td className = "border border-secondary" key={cellNumber} id={id}>{day}</td>
            )
          })}
        </tr>
        {completeTable}
      </tbody>
    </table>
    <hr className = "w-75"></hr>
    <div className = "w-75 mx-auto">
      <button className = "w-25" id = "previous-year" onClick = {() => alterYear(Number(selectedDate.format("Y"))-1)}>{"<<"}</button>
      <button className = "w-25" id = "previous-month" onClick = {() => setMonth(Number(selectedDate.format("M"))-2)}>{"<"}</button>
      <button className = "w-25" id = "next-month" onClick = {() => setMonth(Number(selectedDate.format("M")))}>{">"}</button>
      <button className = "w-25" id = "next-year" onClick = {() => alterYear(Number(selectedDate.format("Y"))+1)}>{">>"}</button>
    </div>
    </div>
  </div>
  </div>
    )
}
