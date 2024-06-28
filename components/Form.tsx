import { useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { useFormState } from 'react-dom';
import { login } from '@/components/Action';
import { loginSchema } from '@/app/schema';

export default function LoginForm() {
  const [lastResult, action] = useFormState(login, undefined);
  const [form, fields] = useForm({
    // Sync the result of last submission
    lastResult,

    // Reuse the validation logic on the client
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: loginSchema });
    },

    // Validate the form on blur event triggered
    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
  });

  return (
    <form
      className="flex flex-col space-y-8 container px-4 md:px-12"
      id={form.id}
      onSubmit={form.onSubmit}
      action={action}
      noValidate
    >
      <div className="m-7">
        <label className="font-medium mb-2 block">Email</label>
        <input
          type="email"
          key={fields.email.key}
          name={fields.email.name}
          defaultValue={fields.email.initialValue}
          placeholder="johnpope@gmail.com"
          className="px-8 mx-8 border border-[#394276] bg-transparent placeholder-[#47505a] w-full lg:w-[25rem] h-[2.5rem] outline-none shadow-xl"
        />
        <div className="text-xs text-red-400">{fields.email.errors}</div>
      </div>
      <div className="m-7">
        <label className="font-medium mb-2 block">Subject</label>
        <input
          type="text"
          key={fields.password.key}
          name={fields.password.name}
          defaultValue={fields.password.initialValue}
          className="px-8 mx-8 border border-[#394276] bg-transparent placeholder-[#47505a] w-full lg:w-[25rem] h-[5rem] outline-none shadow-xl"
        />
        <div className="text-xs text-red-400">{fields.password.errors}</div>
      </div>
      <label>
        <div className="mx-4 flex items-center">
          <span className="mx-4">Remember me</span>
          <input
            type="checkbox"
            key={fields.remember.key}
            name={fields.remember.name}
            defaultChecked={fields.remember.initialValue === 'on'}
          />
        </div>
      </label>
      <button>Submit</button>
    </form>
  );
}