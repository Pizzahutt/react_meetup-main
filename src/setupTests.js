import Enzyme from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import "@testing-library/jest-dom";

Enzyme.configure({ adapter: new EnzymeAdapter() });