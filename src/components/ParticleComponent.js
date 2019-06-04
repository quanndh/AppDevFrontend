import React, { Component } from 'react'
import Particles from 'react-particles-js'

export default class ParticleComponent extends Component {
    render() {
        return (
            <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "150vh",
              background: "linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.5))",
              background: 'url("https://images6.alphacoders.com/366/366872.jpg")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover"
            }}
          >
            <Particles
           
                params={{
                    "particles": {
                        "number": {
                            "value": 160,
                            "density": {
                                "enable": false
                            }
                        },
                        "size": {
                            "value": 10,
                            "random": true
                        },
                        "move": {
                            "direction": "bottom",
                            "out_mode": "out"
                        },
                        "line_linked": {
                            "enable": false
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onclick": {
                                "enable": true,
                                "mode": "remove"
                            }
                        },
                        "modes": {
                            "remove": {
                                "particles_nb": 10
                            }
                        }
                    }
                }}
            />
          </div>
        )
    }
}
