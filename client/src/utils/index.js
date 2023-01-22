import {surpriseMePrompts} from '../constants';
import Filesaver from 'file-saver';

export function getRandomPrompt(){
    const randomIdx=Math.floor(Math.random()*surpriseMePrompts.length);
    const randomPrompt=surpriseMePrompts[randomIdx];

    if(randomPrompt===prompt) return getRandomPrompt(prompt);

    return surpriseMePrompts[randomIdx];
}

export async function downloadImage(_id,photo){
    Filesaver.saveAs(photo,`Arunangshu-image-generator--${_id}`);
}