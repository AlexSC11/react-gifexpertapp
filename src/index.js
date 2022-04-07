import { GifExpertApp } from './GifExpertApp';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';

const divRoot = document.querySelector('#root');
const root = ReactDOMClient.createRoot(divRoot)
root.render(<GifExpertApp/>);
