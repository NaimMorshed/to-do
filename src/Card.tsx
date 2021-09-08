import React from 'react';

interface Data {
    topic: string,
    description: string,
    handleRemove: (topic: string) => void
}

const Card = ({ topic, description, handleRemove }: Data) => {
    return (
        <div className="bg-white max-w-sm p-6 rounded-lg m-5">
            <h1 className="text-3xl font-medium">{topic}</h1>
            <br />
            <p className="text-lg max-w-xs">{description}</p>
            <br />
            <div className="flex justify-center">
                <button 
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-500"
                onClick={() => handleRemove(topic)}
                >Delete</button>
            </div>
        </div>
    );
};

export default Card;