import React from "react"

import IFrameContainer from "../components/iframecontainer"

export default function UnitTest() {
  return (
    <div>
        <h1>Test unitaire de composant</h1>
        <p>IFrameContainer</p>

        <IFrameContainer url='https://player.vimeo.com/video/384167372?dnt=1&amp;app_id=122963'/>
    </div>
  )
}