import React, { useState } from "react";


export function Light() {

	const [color, setColor] = useState("null");
	const [hidden, change] = useState("yes");

	return (
		<div className="container text-center">

			<div className="tlTop"></div>

			<div className="traffic-light">
				<div
					className={
						color === "red" ? "red light selected" : "red light"
					}
					onClick={() => setColor("red")}></div>
				<div
					className={
						color === "yellow"
							? "yellow light selected"
							: "yellow light"
					}
					onClick={() => setColor("yellow")}></div>
				<div
					className={
						color === "green"
							? "green light selected"
							: "green light"
					}
					onClick={() => setColor("green")}></div>
				<div
					className={
						color === "purple"
							? "purple light selected"
							: "purple light"
					}
					style={
						hidden === "yes"
							? { display: "none" }
							: { display: "block" }
					}
					onClick={() => setColor("purple")}></div>
			</div>

			<br />

			<div className="text-center">
                <div className="changeColor">
                    <button
                        type="button"
                        className="btn btn-primary text-center m-3"
                        onClick={() =>
                            color === "red"
                                ? setColor("yellow")
                                : color === "yellow"
                                ? setColor("green")
                                : color === "purple"
                                ? setColor("red")
                                : hidden === "yes"
                                ? setColor("red")
                                : setColor("purple")
                        }>
                        Change color
                    </button>
                </div>

				<br />

                <div className="addPurple">
                    <button
                        type="button"
                        className="btn btn-warning text-center"
                        onClick={() =>
                            hidden === "yes" ? change("no") : change("yes")
                        }>
                        Toggle Purple light show/hide
                    </button>
                </div>
			</div>
		</div>
	);
}