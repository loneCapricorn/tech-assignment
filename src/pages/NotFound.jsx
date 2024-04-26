const NotFound = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-5 px-5 h-32">
      <h1 className="text-2xl sm:text-4xl font-semibold">404: Not Found</h1>
      <p className="text-xl sm:text-3xl font-medium">
        Sorry, the page you are looking for does not exist!
      </p>
    </div>
  );
};

export default NotFound;
