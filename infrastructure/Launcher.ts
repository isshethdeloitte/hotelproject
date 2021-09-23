import {  HotelStack } from './HotelStacks';
import { App } from 'aws-cdk-lib';

const app = new App()
new HotelStack(app, 'Hotel-finder', {
    stackName: 'HotelFinder'
})