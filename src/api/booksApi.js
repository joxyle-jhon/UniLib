import supabase from "@/utils/supabase";

export const getBooks = async () => {
    const { data: books, error } = await supabase.from('books').select('*');

    if(error){
        console.log(error);
        throw new Error("Error while getting list of books.");
    }

    return books;
}