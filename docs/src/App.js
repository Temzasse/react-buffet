import React, { Component } from 'react';
import Highlight from 'react-highlight';
import logo from './images/react-buffet-logo.svg';
import headerBg from './images/header-bg.jpg';
import './App.scss';
import * as codeSnippets from './codeSnippets';

// components
import Tooltip from 'react-buffet/Tooltip';
import Modal from 'react-buffet/Modal';
import LineSpinner from 'react-buffet/LineSpinner';
import CircleSpinner from 'react-buffet/CircleSpinner';
import BallSpinner from 'react-buffet/BallSpinner';
import ImageSlider from 'react-buffet/ImageSlider';

class App extends Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.state = {
      modalOpen: false,
      biggerModal: false,
    };
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  render() {
    const { modalOpen, biggerModal } = this.state;
    let sliderImages = [
      'http://placekitten.com/400/400',
      'http://placekitten.com/400/500',
      'http://placekitten.com/600/500',
      'http://placekitten.com/300/500',
    ];

    if (process.env.NODE_ENV === 'development') {
      sliderImages = [
        require('./images/test-img-1.png'),
        require('./images/test-img-2.svg'),
      ];
    }

    return (
      <div className='Docs'>
        <header className='Docs-header' style={{ backgroundImage: `url(${headerBg})`}}>
          <div className='Docs-header--content'>
            <h1>React Buffet</h1>
            <h3>Collection of reusable React.js components</h3>
          </div>
        </header>

        <div className='Docs-main'>

          <aside className='Docs-sidemenu'>
            <img className='logo' src={logo} alt='logo' />
            <h3>Components</h3>
            <ul>
              <a href='#tooltip'>
                <li>Tooltip</li>
              </a>
              <a href='#modal'>
                <li>Modal</li>
              </a>
              <a href='#spinner'>
                <li>Loading Spinners</li>
              </a>
            </ul>
          </aside>

          <div className='Docs-content'>
            <section>
              <h1>Why do we need another component library?</h1>
              <p>To be honest we probably don't need one.</p>
              <p>
                I decided to create this library after implementing several commonly used UI-components in my school / hobby projects.
                I have always enjoyed making my own components from scratch instead of downloading some ready-made component library -
                try it you will learn a lot!
              </p>
              <p>You can check out the code in my <a href='https://github.com/Temzasse/react-buffet'>Github</a>.</p>
              <br/>
              <h2>How do I use this in my project?</h2>
              <p>If you are building you project with some build tool, etc. Webpack, just download react-buffet from npm:</p>
              <pre>
                <code>npm install react-buffet --save</code>
              </pre>
              <p>You can also add the UMD build, just add this script tag and you can access the lib with <strong>window.ReactBuffet</strong></p>
              <div className='code-highlight'>
                <Highlight className='html'>
                  {codeSnippets.lib}
                </Highlight>
              </div>
            </section>
            <hr />
            <section id='tooltip'>
              <h1>Show me the components already!</h1>
              <h2>Tooltip</h2>
              <div className='section-content'>
                <div className='result-example'>
                  <Tooltip content='tooltip content' bg='red' color='rgb(255,255,0)'>
                    <button>Hover over me</button>
                  </Tooltip>
                  <span style={{ marginRight: 20 }} />
                  <Tooltip content='A lot more content just to test it out... Mooooooore text!!!'>
                    <button>Hover over me too</button>
                  </Tooltip>
                </div>
                <div className='code-example'>
                  <Highlight className='html'>
                    {codeSnippets.tooltip}
                  </Highlight>
                </div>
              </div>
            </section>

            <section id='modal'>
              <h2>Modal</h2>
              <div className='section-content'>
                <div className='result-example'>
                  <button onClick={this.openModal}>
                    Open Modal
                  </button>
                  <span style={{ marginRight: 20 }} />
                  <label>
                    Make modal huuuuge again
                    <input
                      type='checkbox'
                      checked={biggerModal}
                      onChange={
                        () => this.setState({ biggerModal: !biggerModal})
                      }
                    />
                  </label>
                  <Modal
                    isOpen={modalOpen}
                    onClose={this.closeModal}
                    title='Test Modal Header'
                    maxWidth={biggerModal ? 900 : null}
                  >
                    <div>
                      <h2>Hello World!</h2>
                      <button>I'm a button</button>
                      <p>Cute cat pic, why not.</p>
                      <img src='http://placekitten.com/200/100' role='presentation' />
                    </div>
                  </Modal>
                </div>
                <div className='code-example'>
                  <Highlight className='javascript'>
                    {codeSnippets.modalJS}
                  </Highlight>
                  <Highlight className='html'>
                    {codeSnippets.modalHTML}
                  </Highlight>
                </div>
              </div>
            </section>

            <section id='spinner'>
              <h2>Loading Spinners</h2>
              <div className='section-content'>
                <div className='result-example' style={{ flexDirection: 'row' }}>
                  <LineSpinner size='sm' color='#f296ff' />
                  <span style={{ marginRight: 60 }} />
                  <LineSpinner />
                  <span style={{ marginRight: 60 }} />
                  <BallSpinner size='md' color='tomato' />
                  <span style={{ marginRight: 60 }} />
                  <CircleSpinner size='lg' />
                </div>
                <div className='code-example'>
                  <Highlight className='html'>
                    {codeSnippets.spinnerHTML}
                  </Highlight>
                </div>
              </div>
            </section>

            <section id='imageslider'>
              <h2>Image Slider</h2>
              <div className='section-content'>
                <div className='result-example'>
                  <ImageSlider images={sliderImages} cover={false} />
                </div>
                <div className='code-example'>
                  <Highlight className='html'>
                    {codeSnippets.sliderJS}
                  </Highlight>
                  <Highlight className='html'>
                    {codeSnippets.sliderHTML}
                  </Highlight>
                </div>
              </div>
            </section>
          </div>{/* end Docs-content */}
        </div> {/* end Docs-main */}
      </div>
    );
  }
}

export default App;
