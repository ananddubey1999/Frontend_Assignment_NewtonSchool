import React, { useState, useEffect } from 'react';

function Clock() {
  const [workDuration, setWorkDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(5);
  const [flag, setFlag] = useState(false);
  const [worksecond, setWorkSecond] = useState(1500);
  const [breaksecond, setBreakSecond] = useState(300);
  const [type, setType] = useState('work');
  const [resetFlag, setResetFalg] = useState(true);

  useEffect(() => {
    if (flag && type === 'work') {
      if (worksecond > 0) {
        const timer = setTimeout(() => setWorkSecond(worksecond - 1), 1000);
        return () => clearTimeout(timer);
      }
      if (worksecond === 0) {
        alert('work duration is over')
        setType('break');
        setWorkSecond(workDuration * 60);
      }
    }
    if (flag && type === 'break') {
      if (breaksecond > 0) {
        const timer = setTimeout(() => setBreakSecond(breaksecond - 1), 1000);
        return () => clearTimeout(timer);
      }
      if (breaksecond === 0) {
        alert('break duration is over');
        setType('work');
        setBreakSecond(breakDuration * 60);
      }
    }
  }, [flag, type, worksecond, breaksecond, workDuration, breakDuration]);

  const reset = () => {
    setResetFalg(true);
    setFlag(false);
    setType('work');
    setWorkDuration(25);
    setBreakDuration(5);
    setBreakSecond(300);
    setWorkSecond(1500);
  }

  const convertToStandardFormat = (sec) => {
    let m = parseInt(sec / 60).toString();
    let s = parseInt(sec % 60).toString();
    if (m.length === 1) m = '0' + m;
    if (s.length === 1) s = '0' + s;
    return m + ":" + s;
  }
  const validateData = (data) => {
    if (!isNaN(data) && parseInt(data) >= 0) {
      return parseInt(data);
    }
    else
      return '';
  }
  const setDuration = (e) => {
    e.preventDefault();
    if (breakDuration + workDuration <= 0) {
      reset();
      return;
    }
    setResetFalg(false);
    setType('work');
    setWorkSecond(workDuration * 60);
    setBreakSecond(breakDuration * 60);
  }
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <div className='clock'>
        <h1 className='timer'>{(type === 'work') ? convertToStandardFormat(worksecond) : convertToStandardFormat(breaksecond)}</h1>
        <h3>{(type === 'work') ? 'Work' : 'Break'}-Time</h3>
      </div>
      <div className='control'>
        <button data-testid='start-btn' key='start' onClick={() => { setFlag(true); setResetFalg(false) }} disabled={flag} >start</button>
        <button data-testid='stop-btn' key='stop' onClick={() => { setFlag(false); setResetFalg(false) }} disabled={!flag}>Stop</button>
        <button data-testid='reset-btn' key='reset' onClick={() => { reset() }} disabled={resetFlag}>Reset</button>
      </div>
      <br></br>
      <div className='parameters'>
        <form onSubmit={setDuration}>
          <input data-testid='work-duration' placeholder='work duration' required type='Number' value={workDuration} disabled={flag} onChange={(e) => setWorkDuration(validateData(e.target.value))}></input>
          <input data-testid='break-duration' placeholder='break duration' required type='Number' value={breakDuration} disabled={flag} onChange={(e) => setBreakDuration(validateData(e.target.value))}></input>
          <button data-testid='set-btn' type='submit' disabled={flag}>set</button>
        </form>
      </div>
    </div>
  );
}

export default Clock;
