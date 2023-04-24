import { Button } from '../ui/Button/Button';

interface Book {
	id: number;
	title: string;
	price: number;
	addToOrder?: (id: any) => void;
}

interface BooksProps {
	items: Book[];
}

const Book = ({ id, title, price }: Book) => {
	return (
		<div className='book'>
			<h2>{title}</h2>
			<span>{price}</span>
			<Button style={{ margin: '30px' }} type='success' className='book-btn'>
				Buy
			</Button>
		</div>
	);
};

const Books = ({ items }: BooksProps) => {
	return (
		<div style={{ marginLeft: '50px', marginTop: '20px' }} className='books'>
			{items.map((book) => (
				<Book key={book.id} {...book} />
			))}
		</div>
	);
};

export default Books;
