import React from "react"
import styles from "./styles/iframecontainer.module.css"

export default ({ url }) => (
    <div className={styles.iframecontainer}>
        <iframe className={styles.iframe} title="Test iframe" src={url} allow="autoplay; fullscreen" allowfullscreen="" id="fitvid0" frameborder="0"frameBorder="0" allowFullScreen>
        </iframe>
    </div>
)

/*
VIMEO
<iframe title="Unique Title 001" src={node.data.uri} frameBorder="0" allowFullScreen></iframe>

YOUTUBE
<IframeContainer><iframe title="Unique Title 002" src={node.data.uri} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" frameBorder="0" allowFullScreen></iframe></IframeContainer>
*/