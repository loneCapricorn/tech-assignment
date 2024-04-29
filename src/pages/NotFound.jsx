const NotFound = () => {
  return (
    <main className="flex flex-col justify-center items-center gap-5 mx-5 my-10 h-32">
      <h1 className="text-2xl sm:text-4xl font-semibold">404: Not Found</h1>
      <p className="text-xl sm:text-3xl font-medium">
        Sorry, the page you are looking for does not exist!
      </p>
    </main>
  );
};

export default NotFound;
