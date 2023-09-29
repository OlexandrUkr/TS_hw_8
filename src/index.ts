function filterArray<T>(array: T[], condition: (element: T) => boolean): T[] {
  const resultArray: T[] = [];

  for (let i=0; i < array.length; i++) {
    const element = array[i];

    if (condition(element)) {
      resultArray.push(element);
    }
  }

  return resultArray;
}

class Stack<T> {
  private elements: T[] = [];

  public push(element: T): void {
    this.elements.push(element);
  }

  public pop(): T | undefined {
    return this.elements.pop();
  }

  public peek(): T | undefined {
    return this.elements[this.elements.length - 1];
  }
}

class Dictionary<K extends string | number, V> {
  private elements: { [key in K]: V } = {} as { [key in K]: V };

  public set(key: K, value: V): void {
    this.elements[key] = value;
  }
  public get(key: K): V | undefined {
    return this.elements[key];
  }
  public has(key: K): boolean {
    return key in this.elements;
  }
}
