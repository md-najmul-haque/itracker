import React from 'react';

type TaskCardProps = {
    cards: {
        id: string,
        task: string
    }[]
}

const TaskCard = ({ cards }: TaskCardProps) => {
    // console.log(cards)
    return (
        <div>
            {
                cards.map(card => {
                    return <p key={card.id} className="bg-white  shadow-md p-2 my-2">{card?.task}</p>
                })
            }

        </div >

    );
};

export default TaskCard;