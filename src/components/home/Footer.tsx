export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="max-w-7xl border-t border-border-navbar mx-auto py-6">
      <div className=" px-4 lg:px-8">
        <p className="text-center text-gray-400 text-sm">
          {year} © DigitWalletHub. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
