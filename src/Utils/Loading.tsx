import PacmanLoader from "react-spinners/PacmanLoader";

const Loading = () => {
    return (
        <div className="flex justify-center align-middle py-24">
            <PacmanLoader
                color="#f41212"
                loading
                margin={5}
                size={50}
                />
        </div>
    );
};

export default Loading;