import clip from "./video/vd_love.mp4";
import { forwardRef, useImperativeHandle, useRef } from "react";

function Video(props, ref) {
	const videoRef = useRef();

	useImperativeHandle(ref, () => ({
		play() {
			videoRef.current && videoRef.current.play();
		},
		pause() {
			videoRef.current && videoRef.current.pause();
		},
	}));

	return <video ref={videoRef} src={clip} width="800px" />;
}

export default forwardRef(Video);
