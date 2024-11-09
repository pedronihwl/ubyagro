import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Toaster } from "@/components/ui/toaster";
import UploadInput from "@/components/UploadInput";

export default function HomePage() {
  return (
    <div className="flex flex-col px-[133px] py-10 w-fit gap-6">
      <div className="flex gap-6">
        <Card className="p-8 w-[450px] h-[154px] rounded-sm">
          <CardHeader className="p-0">
            <CardTitle className="text-xl font-normal text-[#6A6A6A]">
              Quantidade de carbono emitido
            </CardTitle>
          </CardHeader>
          <CardContent className="flex gap-2 p-0 items-end">
            <p className="font-bold text-[#131313] text-5xl">1.186,348</p>
            <p className="text-[#AAAAAA] text-sm mb-2">ton</p>
          </CardContent>
        </Card>

        <Card className="p-8 w-[450px] h-[154px] rounded-sm">
          <CardHeader className="p-0">
            <CardTitle className="text-xl font-normal text-[#6A6A6A]">
              Créditos de carbono
            </CardTitle>
          </CardHeader>
          <CardContent className="flex gap-2 p-0 items-end justify-between">
            <p className="font-bold text-[#131313] text-5xl">1.186</p>
            <a href="" className="flex gap-1 mb-3 items-center">
              <p className="text-[#EE3138] text-sm">Negociar créditos</p>
              <img
                src="/assets/icons/arrow-up-right-red.svg"
                alt="seta para direita acima"
                className="w-4 h-4"
              />
            </a>
          </CardContent>
        </Card>

        <UploadInput />
      </div>

      <div className="flex gap-6">
        <Card className="w-[924px]">
          <CardHeader>
            <div className="flex items-end justify-between">
              <CardTitle className="text-3xl font-semibold">
                Relatório de emissões
              </CardTitle>
              <div className="flex gap-1">
                <a href="/" className="text-[#EE3138] text-sm">
                  Ver relatório completo
                </a>
                <img
                  src="/assets/icons/arrow-up-right-red.svg"
                  alt="seta para direita acima"
                  className="w-4 h-4"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-8"></CardContent>
        </Card>

        <Card className="w-[450px]">
          <CardHeader>
            <div className="flex items-end justify-between">
              <CardTitle className="text-3xl font-semibold">Produtos</CardTitle>
              <a
                href="/"
                className="text-[#EE3138] text-sm flex gap-1 items-center"
              >
                <img src="/assets/icons/plus-circle-red.svg" alt="plus" />
                <p>Adicionar produto</p>
              </a>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <p className="text-[#6A6A6A] text-xl">
              Os produtos estão ordenados pelos que{" "}
              <p className="text-[#131313] text-xl">mais emitem CO²</p>
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex gap-4">
                <Card className="w-20 h-24 rounded-xl flex items-center justify-center">
                  <img src="/assets/imgs/como-14.png" alt="como-14" />
                </Card>
                <div className="w-full flex flex-col">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-medium">COMO-14</p>
                      <div className="px-4 py-1 bg-[#CE1F1F] text-white rounded-3xl">
                        Atenção
                      </div>
                    </div>
                    <p className="text-[#6A6A6A] text-sm">
                      Gasto para produzir o produto
                    </p>
                  </div>
                  <div className="flex items-end gap-1">
                    <p className="text-[30px] font-bold">1.000</p>
                    <p className="text-base mb-2">CO²</p>
                  </div>
                </div>
              </div>

              <div className="w-full h-[1px] bg-[#D9D9D9]" />

              <div className="flex gap-4">
                <Card className="w-20 h-24 rounded-xl flex items-center justify-center">
                  <img src="/assets/imgs/l-cab.png" alt="como-14" />
                </Card>
                <div className="w-full flex flex-col">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-medium">L-CaB</p>
                    </div>
                    <p className="text-[#6A6A6A] text-sm">
                      Gasto para produzir o produto
                    </p>
                  </div>
                  <div className="flex items-end gap-1">
                    <p className="text-[30px] font-bold">800</p>
                    <p className="text-base mb-2">CO²</p>
                  </div>
                </div>
              </div>

              <div className="w-full h-[1px] bg-[#D9D9D9]" />

              <div className="flex gap-4">
                <Card className="w-20 h-24 rounded-xl flex items-center justify-center">
                  <img src="/assets/imgs/potamol.png" alt="como-14" />
                </Card>
                <div className="w-full flex flex-col">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <p className="text-2xl font-medium">POTAMOL</p>
                    </div>
                    <p className="text-[#6A6A6A] text-sm">
                      Gasto para produzir o produto
                    </p>
                  </div>
                  <div className="flex items-end gap-1">
                    <p className="text-[30px] font-bold">450</p>
                    <p className="text-base mb-2">CO²</p>
                  </div>
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full rounded-3xl border-[#FF3131] text-[#FF3131]"
            >
              <img src="/assets/icons/eye-red.svg" alt="olho vermelho" />
              Vizualizar relatório completo
            </Button>
          </CardContent>
        </Card>
      </div>

      <div>
        <Card className="w-full h-44"></Card>
      </div>

      <Toaster />
    </div>
  );
}
