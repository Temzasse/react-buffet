export const lib = `<script src="https://unpkg.com/react-buffet/umd/react-buffet.min.js"></script>`;
export const tooltip =
`<Tooltip content='tooltip content' bg='red' color='rgb(255,255,0)'>
  <button>Hover over me</button>
</Tooltip>

<Tooltip content='A lot more content just to test it out... Mooooooore text!!!'>
  <button>Hover over me too</button>
</Tooltip>
`;

export const modalJS =
`constructor() {
  this.state = {
    modalOpen: false,
    biggerModal: false,
  }
}

openModal() {
  this.setState({ modalOpen: true });
}

closeModal() {
  this.setState({ modalOpen: false });
}
`;

export const modalHTML =
`... and in render method

<button onClick={this.openModal}>
  Open Modal
</button>

<Modal
  isOpen={this.state.modalOpen}
  onClose={this.closeModal}
  title='Test Modal Header'
  maxWidth={this.state.biggerModal ? 900 : null}
>
  <div>
    <h2>Hello World!</h2>
    <button>I'm a button</button>
    <p>Cute cat pic, why not.</p>
    <img src='http://placekitten.com/200/100' role='presentation' />
  </div>
</Modal>
`;

export const spinnerHTML =
`// You can give "size" sm|md|lg or "color" prop to spinner
<LineSpinner size='sm' color='#f296ff' />
<LineSpinner />
<BallSpinner size='md' color='tomato' />
<CircleSpinner size='lg' />
`;

export const sliderJS =
`const images = [
  'http://placekitten.com/400/400',
  'base64-encoded-image-is-also-fine',
  require('images/some-random-image.png'),
];
`;

export const sliderHTML =
`// You can give "cover" true|false prop
// to make slide images cover the entire slide or fit inside it
// Also try providing "themeColor" prop to change component colors (defaults to #333)

<ImageSlider images={images} cover={false} themeColor='#333' />
`;
