'use client'
import { FC } from 'react'

const Newsletter: FC = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        mode: 'no-cors',
        body: new FormData(form)
      });

      const successMessage = document.getElementById('mce-success-response');
      if (successMessage) {
        successMessage.style.display = 'block';
        form.style.display = 'none';
      }
      
    } catch (error) {
      console.error('Subscription error:', error);
    }
  };

  return (
    <div className="my-16 w-full max-w-2xl mx-auto border-t border-gray-200 dark:border-gray-800 pt-8">
      <div id="mce-success-response" style={{ display: 'none' }} className="prose dark:prose-invert space-y-4">
        <h3 className="font-bold text-xl">Te invitamos a leer nuestras ideas locas y no tan locas en tu correo</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">Recibirás cada entrada que publiquemos y actualizaciones de nuestras ideas, aprendizajes y proyectos :)</p>
        <br></br>
        <p className="text-emerald-600 dark:text-emerald-400 font-bold text-sm">¡Gracias por suscribirte! Por favor revisa tu correo para confirmar.</p>
      </div>
      <form
        action="https://nicosquiroz.us16.list-manage.com/subscribe/post?u=08eff90bebaa424104c818e48&amp;id=dc64551c99&amp;f_id=00f122e1f0"
        method="post"
        onSubmit={handleSubmit}
        className="prose dark:prose-invert space-y-4"
      >
        <h3 className="font-bold text-xl">Te invitamos a leer nuestras ideas locas y no tan locas en tu correo</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">Recibirás cada entrada que publiquemos y actualizaciones de nuestras ideas, aprendizajes y proyectos :)</p>
        <br></br>
        <div className="flex gap-2">
          <input
            type="email"
            name="EMAIL"
            placeholder="tu@correo.com"
            className="text-sm flex-1 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:border-orange-600 focus:outline-none dark:text-gray-100"
            required
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-md bg-orange-600 text-white border border-orange-600 hover:bg-orange-700 hover:border-orange-700 transition-colors"
          >
            Suscribirse
          </button>
        </div>
        <br></br>
      </form>
      <div className="border-t border-gray-200 dark:border-gray-800 my-8"></div>
      <p className="!text-orange-500 dark:!text-orange-300 text-sm text-center mt-1 font-medium">
      <br></br>
      En Innertwist avanzamos hacia difuminar el límite entre arte y ciencia.      </p>
    </div>
  );
};

export default Newsletter;