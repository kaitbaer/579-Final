import Navigation from "./Navigation";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import fv from "../Images/forrestvideo.mp4"
const StressSpace = () => {

    return (
        <div>
            <Navigation />
            <video
          style={{ minWidth: "100%", minHeight: "100" }}
          playsInline
          autoPlay
          muted
          loop
        >
          <source
            className="h-100"
            src={fv}
            type="video/mp4"
          />
        </video>
        </div>

    )
}

export default StressSpace