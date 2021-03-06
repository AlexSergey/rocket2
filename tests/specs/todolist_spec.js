import {expect, renderComponent} from '../test.helper';
import Todolist from '../../src/components/todolist/index.jsx';

describe('Todolist tests', function() {
    let component,
        store;

    beforeEach(() => {
        component = renderComponent(Todolist);
        store     = component.node.store;
    });

    it('Todo add', () => {
        const action = {
            type: 'ADD_TODO',
            payload: 'test todo item 1'
        };
        store.dispatch(action);

        var text = component.find('.list-item').text();

        expect(store.getState().todolist.todos.length).toEqual(1);
        expect(text).toEqual('test todo item 1');
    });
});