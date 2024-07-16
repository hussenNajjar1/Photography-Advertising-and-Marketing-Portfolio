import React from "react";
import ContactsCount from '../../components/Count/contactsCount'
const AdminPage = () => {


  return (
    <div className='px-5 lg:px-20 h-screen w-full text-right'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <ContactsCount />
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
