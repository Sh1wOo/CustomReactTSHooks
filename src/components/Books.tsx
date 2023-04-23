import { Button } from '../ui/Button';

interface Book {
  id: number;
  title: string;
  price: number;
  addToOrder?: (id: any) => void;
}

interface BooksProps {
  items: Book[];
  addToOrder?: () => void;
}

const Book = ({ id, title, price, addToOrder }: Book) => {
  return (
    <div className='book'>
      <h2>{title}</h2>
      <span>{price}</span>
      <Button
       
        type='success'
        className='book-btn'
      >
        Buy
      </Button>
    </div>
  );
};

const Books = ({ items, addToOrder }: BooksProps) => {
  return (
    <div className='books'>
      {items.map((book) => (
        <Book key={book.id} {...book} />
      ))}
    </div>
  );
};

export default Books;
