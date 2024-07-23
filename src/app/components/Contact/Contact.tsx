'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const schema = z.object({
  name: z.string(),
  company: z.string(),
  email: z.string(),
  phone: z.string(),
  subject: z.string(),
  message: z.string(),
});

type FormData = z.infer<typeof schema>;

export const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: {
      name: '',
      company: '',
      email: '',
      message: '',
      phone: '',
      subject: '',
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);

    toast.promise(() => axios.post('/api/contact', data), {
      loading: 'Enviando...',
      success: () => {
        setLoading(false);

        return 'Mensagem enviada com sucesso';
      },
      error: () => {
        setLoading(false);

        return 'Ocorreu um erro ao enviar a mensagem';
      },
    });
  };

  return (
    <div className="w-full max-w-[1320px] flex flex-col items-center mt-40">
      <h3>Quer conversar?</h3>

      <div className="flex flex-col items-center gap-4 w-full max-w-[700px] mt-8">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 w-full">
          <Input placeholder="Nome" {...register('name')} />
          <Input placeholder="Empresa" {...register('company')} />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 w-full">
          <Input type="email" placeholder="E-mail" {...register('email')} />
          <Input type="tel" placeholder="Telefone" {...register('phone')} />
        </div>

        <Input
          placeholder="Sobre o que quer conversar?"
          {...register('subject')}
        />

        <Textarea placeholder="Mensagem" {...register('message')} />

        <Button disabled={loading} onClick={handleSubmit(onSubmit)}>
          Enviar
        </Button>
      </div>
    </div>
  );
};
