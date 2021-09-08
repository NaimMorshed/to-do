import './App.css';
import Card from './Card';
import React, { useState } from 'react';

interface Data {
  topic: string,
  description: string
}

const App = () => {
  const [data, setData] = useState<Data>({
    topic: "",
    description: ""
  });
  const [dataList, setDataList] = useState<Data[]>([]);

  const onSubmit = (event: any): void => {
    event.preventDefault();
    setDataList([...dataList, data])
    setData({
      topic: "",
      description: ""
    })
  }

  const changeHit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleRemove = (topic: string) => {
    const temp = dataList.filter(c => c.topic !== topic)
    setDataList(temp)
  }

  return (
    <div className="bg-gray-400 min-h-screen flex p-5 flex-col">
      <form onSubmit={onSubmit} className="flex justify-center">
        <input
          required
          value={data.topic}
          className="m-5 px-5 py-3 rounded-lg focus:outline-none"
          onChange={changeHit}
          type="text"
          placeholder="Topic"
          name="topic"
        />
        <input
          required
          value={data.description}
          className="m-5 px-5 py-3 rounded-lg focus:outline-none w-1/2"
          onChange={changeHit}
          type="text"
          placeholder="Description"
          name="description"
        />
        <InputSubmit />
      </form>
      <br />
      <div className="flex m-5 flex-wrap">
        {
          dataList.map(data => <Card key={data.topic} topic={data.topic} description={data.description} handleRemove={handleRemove} />)
        }
      </div>
    </div>
  );
}

const InputSubmit = () => {
  return (
    <input
      className="m-5 px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-500"
      type="submit"
      value="Submit"
    />
  );
}

export default App;
