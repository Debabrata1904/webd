const numbers = new Set();

numbers.add(1);
numbers.add(10);
numbers.add(100);
numbers.add(1000);

export const add_number_db = (number) => {
  numbers.add(number);
};

export const is_number_exist_db = (number) => {
  return numbers.has(number);
};


export const delete_number_db = (number) => {
  numbers.delete(number);
};

export const get_all_numbers_db = () => {
  return Array.from(numbers);
};

