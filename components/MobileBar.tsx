export default function MobileBar() {
  return (
    <>
      <div className="fixed bottom-0 inset-x-0 z-50 sm:hidden bg-void/95 backdrop-blur border-t border-line p-3 grid grid-cols-2 gap-2">
        <a href="tel:+79655151501" className="btn btn-c">
          Позвонить
        </a>
        <a href="#calc" className="btn btn-m">
          Калькулятор
        </a>
      </div>
      <div className="h-20 sm:hidden" aria-hidden />
    </>
  );
}
