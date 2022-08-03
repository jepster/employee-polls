import {Link} from "react-router-dom";

const CardComponent = ({question, author}) => {
    return (
        <Link to={'poll/' + question.id}>
        <div className="m-3 p-2 rounded-xl shadow-md hover:shadow-xl transition bg-zinc-300 max-w-sm mx-auto flex items-center space-x-4">
            <div className="shrink-0">
                <img className="h-12 w-12" src={author?.avatarURL} alt="Author" />
            </div>
            <div>
                <div className="text-xl font-medium text-black">{question.author}</div>
                <p>{new Date(question.timestamp).toDateString()}</p>
                <p>Show</p>
            </div>
        </div>
        </Link>
    );
}

export default CardComponent;
