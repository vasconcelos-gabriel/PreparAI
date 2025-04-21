const Footer = () => {
  return (
    <footer className="w-full py-6 text-center border-t border-border mt-10">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} PreparAI. Todos os direitos
        reservados.
      </p>
      <p className="text-xs text-muted-foreground mt-1">
        Desenvolvido por{" "}
        <a
          href="https://www.linkedin.com/in/gabriel-porto-19b330131/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-primary transition-colors"
        >
          Gabriel Porto
        </a>
      </p>
    </footer>
  );
};

export default Footer;
