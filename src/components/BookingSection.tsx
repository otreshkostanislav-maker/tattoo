import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar as CalendarIcon, CreditCard } from "lucide-react";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

export default function BookingSection() {
  const { t } = useLanguage();
  const [date, setDate] = useState<dayjs.Dayjs | null>(dayjs());
  
  return (
    <section id="booking" className="py-12 md:py-24 px-4 bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4 uppercase">{t("booking.title")}</h2>
          <p className="text-white/60 max-w-2xl mx-auto font-light text-sm md:text-base">{t("booking.subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-12">
          {/* Schedule Column */}
          <Card className="bg-zinc-950 border-zinc-800 text-white shadow-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl md:text-2xl font-heading uppercase">
                <CalendarIcon className="w-5 h-5 text-primary" />
                {t("booking.scheduleAppointment")}
              </CardTitle>
              <CardDescription className="text-zinc-400 text-xs md:text-sm">{t("booking.scheduleDescription")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* MUI Date Picker - DISABLED */}
              <div className="flex justify-center p-2 md:p-4 opacity-50 pointer-events-none relative group">
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 rounded-lg">
                  <span className="text-blue-400 font-bold tracking-[0.2em] uppercase text-xl md:text-2xl drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] transform -rotate-12 border-4 border-blue-400/50 px-6 py-2 rounded-xl">
                    Soon
                  </span>
                </div>
                <style>{`
                  .MuiPickersDay-root {
                    color: #e4e4e7;
                    font-weight: 500;
                  }
                  .MuiPickersDay-root:hover {
                    background-color: rgba(59, 130, 246, 0.3);
                  }
                  .MuiPickersDay-today {
                    border-color: rgb(59, 130, 246);
                    color: #3b82f6;
                    font-weight: 700;
                  }
                  .Mui-selected {
                    background-color: rgb(59, 130, 246) !important;
                    color: white !important;
                    font-weight: 700;
                  }
                  .MuiPickersCalendarHeader-root {
                    color: #e4e4e7;
                  }
                  .MuiDayPicker-header {
                    color: #a1a1aa;
                  }
                  .MuiDayPicker-weekDayLabel {
                    color: #a1a1aa;
                    font-weight: 600;
                  }
                  .MuiPickersMonth-root {
                    color: #e4e4e7;
                  }
                  .MuiPickersYear-root {
                    color: #e4e4e7;
                  }
                  .MuiButtonBase-root {
                    color: #e4e4e7;
                  }
                  .MuiPickersArrowSwitcher-button {
                    color: #3b82f6;
                  }
                  .MuiOutlinedInput-root {
                    color: #e4e4e7;
                  }
                  .MuiOutlinedInput-input {
                    color: #e4e4e7 !important;
                  }
                  .MuiOutlinedInput-notchedOutline {
                    border-color: rgba(59, 130, 246, 0.3);
                  }
                  .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
                    border-color: rgba(59, 130, 246, 0.6);
                  }
                  .MuiIconButton-root {
                    color: #3b82f6;
                  }
                  .MuiPaper-root {
                    background-color: #27272a !important;
                  }
                  .MuiPickersPopper-root .MuiPaper-root {
                    background-color: #18181b !important;
                    border: 1px solid rgba(59, 130, 246, 0.2);
                  }
                `}</style>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={date}
                    onChange={(newDate) => setDate(newDate)}
                    slotProps={{
                      textField: {
                        size: "small",
                        sx: {
                          width: "100%",
                          "& .MuiInputBase-input": {
                            color: "white",
                            padding: "8px 12px",
                            fontSize: "14px",
                          },
                          "& .MuiOutlinedInput-root": {
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                          },
                        },
                      },
                      popper: {
                        sx: {
                          "& .MuiPaper-root": {
                            backgroundColor: "#18181b",
                            color: "white",
                          },
                        },
                      },
                    }}
                  />
                </LocalizationProvider>
              </div>
              
              <div className="space-y-2">
                <Label className="text-zinc-400 text-sm">{t("booking.preferredTime")}</Label>
                <Select>
                  <SelectTrigger className="bg-zinc-900 border-zinc-800 text-white text-sm md:text-base cursor-pointer" data-testid="select-time">
                    <SelectValue placeholder={t("booking.selectTime")} />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-900 border-zinc-800 text-white">
                    <SelectItem value="10:00">10:00 AM</SelectItem>
                    <SelectItem value="12:00">12:00 PM</SelectItem>
                    <SelectItem value="14:00">02:00 PM</SelectItem>
                    <SelectItem value="16:00">04:00 PM</SelectItem>
                    <SelectItem value="18:00">06:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-zinc-400 text-sm">{t("booking.artist")}</Label>
                <Select>
                  <SelectTrigger className="bg-zinc-900 border-zinc-800 text-white text-sm md:text-base cursor-pointer" data-testid="select-artist">
                    <SelectValue placeholder={t("booking.selectArtist")} />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-900 border-zinc-800 text-white">
                    <SelectItem value="lukas">{t("booking.artist1")}</SelectItem>
                    <SelectItem value="sarah">{t("booking.artist2")}</SelectItem>
                    <SelectItem value="max">{t("booking.artist3")}</SelectItem>
                    <SelectItem value="any">{t("booking.anyArtist")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full bg-white text-black hover:bg-gray-200 font-heading uppercase tracking-wider py-6 text-sm md:text-base cursor-pointer" data-testid="button-request-appointment">
                {t("booking.requestAppointment")}
              </Button>
            </CardContent>
          </Card>

          {/* Payment Column */}
          <Card className="bg-zinc-950 border-zinc-800 text-white shadow-2xl h-fit">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl md:text-2xl font-heading uppercase">
                <CreditCard className="w-5 h-5 text-primary" />
                {t("booking.prepaymentDeposits")}
              </CardTitle>
              <CardDescription className="text-zinc-400 text-xs md:text-sm">{t("booking.prepaymentDescription")}</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="deposit" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-zinc-900">
                  <TabsTrigger value="deposit" className="data-[state=active]:bg-zinc-800 data-[state=active]:text-white text-zinc-400 text-xs md:text-sm cursor-pointer">{t("booking.deposit")}</TabsTrigger>
                  <TabsTrigger value="voucher" className="data-[state=active]:bg-zinc-800 data-[state=active]:text-white text-zinc-400 text-xs md:text-sm cursor-pointer">{t("booking.giftVoucher")}</TabsTrigger>
                </TabsList>
                
                <TabsContent value="deposit" className="space-y-6 mt-6 relative">
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/60 rounded-lg backdrop-blur-[2px]">
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-blue-400 font-bold tracking-[0.3em] uppercase text-2xl md:text-3xl drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]">
                        Soon
                      </span>
                      <p className="text-zinc-500 text-[10px] uppercase tracking-widest">{t("booking.prepaymentDescription")}</p>
                    </div>
                  </div>
                  <div className="opacity-20 pointer-events-none space-y-6">
                    <div className="space-y-2">
                      <Label className="text-zinc-400 text-sm">{t("booking.amount")}</Label>
                      <Input type="number" placeholder={t("booking.amountPlaceholder")} className="bg-zinc-900 border-zinc-800 text-white text-sm md:text-base" data-testid="input-amount" />
                      <p className="text-xs text-zinc-500">{t("booking.standardDeposit")}</p>
                    </div>
                    
                    <div className="space-y-2">
                       <Label className="text-zinc-400 text-sm">{t("booking.reference")}</Label>
                       <Input type="text" placeholder={t("booking.namePlaceholder")} className="bg-zinc-900 border-zinc-800 text-white text-sm md:text-base" data-testid="input-name" />
                    </div>

                    <div className="pt-4 space-y-3">
                      <Button variant="outline" className="w-full border-zinc-700 hover:bg-zinc-800 hover:text-white h-12 text-sm md:text-base cursor-pointer" data-testid="button-pay-card">
                        {t("booking.payWithCard")}
                      </Button>
                      <Button variant="outline" className="w-full border-zinc-700 hover:bg-blue-900/20 hover:text-blue-400 hover:border-blue-900 h-12 text-sm md:text-base text-blue-400 cursor-pointer" data-testid="button-pay-paypal">
                        {t("booking.payWithPayPal")}
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="voucher" className="space-y-6 mt-6">
                  <div className="p-4 md:p-6 border border-zinc-800 border-dashed rounded bg-zinc-900/50 text-center">
                    <p className="text-zinc-400 mb-4 text-sm md:text-base">{t("booking.giftTheJoy")}</p>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800 text-white text-xs md:text-sm cursor-pointer" data-testid="button-voucher-50">€50</Button>
                      <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800 text-white text-xs md:text-sm cursor-pointer" data-testid="button-voucher-100">€100</Button>
                      <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800 text-white text-xs md:text-sm cursor-pointer" data-testid="button-voucher-200">€200</Button>
                    </div>
                    <Button className="w-full bg-white text-black hover:bg-gray-200 text-sm md:text-base cursor-pointer" data-testid="button-purchase-voucher">{t("booking.purchaseVoucher")}</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
