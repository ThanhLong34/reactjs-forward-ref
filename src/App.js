import "./App.css";
import Video from "./Video";
import { useRef } from "react";

function App() {
	const videoRef = useRef();

	function handlePlay() {
		videoRef.current.play();
	}

	function handlePause() {
		videoRef.current.pause();
	}

	return (
		<div className="App">
			<Video ref={videoRef} />
			<div>
				<button onClick={handlePlay}>Play</button>
				<button onClick={handlePause}>Pause</button>
			</div>
		</div>
	);
}

export default App;
