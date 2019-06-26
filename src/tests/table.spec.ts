import {TableComponent} from '../app/table/table.component';


// Straight Jasmine testing without Angular's testing support
describe('TableComponent', () => {
  let table: TableComponent;
  beforeEach(() => {
    table = new TableComponent(null);
  });

  it('#makeUppercaseTheFirstChar should iterate through all the list', () => {
    var list : object[] = [{"level":"FOO"}, {"level":"BAR"}];
    expect(table.makeUppercaseTheFirstChar(list)[0]["level"]).toBe("Foo");
    expect(table.makeUppercaseTheFirstChar(list)[1]["level"]).toBe("Bar");
  });

});
