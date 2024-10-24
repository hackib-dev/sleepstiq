import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { FaSearch } from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <>
      <div className="bg-[#FBF9F2] py-20  md:py-44 px-5 md:px-16 xl:px-40 space-y-5">
        <p className="text-primary-blue">We&apos;re here to help you</p>
        <p className="text-5xl font-semibold text-primary-blue">
          How can we assist?
        </p>
        <Input
          leftIcon={<Search />}
          placeholder="Search FAQs here"
          className="placeholder:text-primary-blue max-w-2xl h-14 rounded-xl"
        />
      </div>
      <div className="py-16 px-5 md:px-16 xl:px-40">
        <Tabs defaultValue="sleepstiq" className=" ">
          <TabsList>
            <div className="grid grid-cols-3 md:flex md:flex-col md:gap-5">
              <TabsTrigger value="sleepstiq" className="text-sm md:text-base">
                Sleepstiq Product
              </TabsTrigger>
              <TabsTrigger value="order" className="text-sm md:text-base">
                Order
              </TabsTrigger>
              <TabsTrigger value="melantonin" className="text-sm md:text-base">
                Melantonin
              </TabsTrigger>
            </div>
            <TabsContent value="sleepstiq" className="mt-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem
                  value="item-1"
                  className="border-t border-[#BDBDBD]"
                >
                  <AccordionTrigger>Q1: How does it work?</AccordionTrigger>
                  <AccordionContent>
                    Inhaling on the diffuser will turn the inside liquids
                    (melatonin, lavender, chamomile) into a light mist which you
                    inhale, and then exhale out your nose. Inhaling the
                    melatonin allows for a near-instant effect, and also allows
                    you to experience the soothing aromatherapeutic effect of
                    lavender and chamomile.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Q2: Why inhale melatonin?</AccordionTrigger>
                  <AccordionContent>
                    Inhaling on the diffuser will turn the inside liquids
                    (melatonin, lavender, chamomile) into a light mist which you
                    inhale, and then exhale out your nose. Inhaling the
                    melatonin allows for a near-instant effect, and also allows
                    you to experience the soothing aromatherapeutic effect of
                    lavender and chamomile.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    Q3: How much melatonin is there per inhale?
                  </AccordionTrigger>
                  <AccordionContent>
                    Inhaling on the diffuser will turn the inside liquids
                    (melatonin, lavender, chamomile) into a light mist which you
                    inhale, and then exhale out your nose. Inhaling the
                    melatonin allows for a near-instant effect, and also allows
                    you to experience the soothing aromatherapeutic effect of
                    lavender and chamomile.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    Q4: Is it an e-cigarette or tobacco product?
                  </AccordionTrigger>
                  <AccordionContent>
                    Inhaling on the diffuser will turn the inside liquids
                    (melatonin, lavender, chamomile) into a light mist which you
                    inhale, and then exhale out your nose. Inhaling the
                    melatonin allows for a near-instant effect, and also allows
                    you to experience the soothing aromatherapeutic effect of
                    lavender and chamomile.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Q5: What&apos;s in it? </AccordionTrigger>
                  <AccordionContent>
                    Inhaling on the diffuser will turn the inside liquids
                    (melatonin, lavender, chamomile) into a light mist which you
                    inhale, and then exhale out your nose. Inhaling the
                    melatonin allows for a near-instant effect, and also allows
                    you to experience the soothing aromatherapeutic effect of
                    lavender and chamomile.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>Q6: What&apos;s not in it?</AccordionTrigger>
                  <AccordionContent>
                    Inhaling on the diffuser will turn the inside liquids
                    (melatonin, lavender, chamomile) into a light mist which you
                    inhale, and then exhale out your nose. Inhaling the
                    melatonin allows for a near-instant effect, and also allows
                    you to experience the soothing aromatherapeutic effect of
                    lavender and chamomile.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger>
                    Q7: How long does it last?
                  </AccordionTrigger>
                  <AccordionContent>
                    Inhaling on the diffuser will turn the inside liquids
                    (melatonin, lavender, chamomile) into a light mist which you
                    inhale, and then exhale out your nose. Inhaling the
                    melatonin allows for a near-instant effect, and also allows
                    you to experience the soothing aromatherapeutic effect of
                    lavender and chamomile.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                  <AccordionTrigger>
                    Q8: How do I know it has run out/died?
                  </AccordionTrigger>
                  <AccordionContent>
                    Inhaling on the diffuser will turn the inside liquids
                    (melatonin, lavender, chamomile) into a light mist which you
                    inhale, and then exhale out your nose. Inhaling the
                    melatonin allows for a near-instant effect, and also allows
                    you to experience the soothing aromatherapeutic effect of
                    lavender and chamomile.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
            <TabsContent value="order">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem
                  value="item-1"
                  className="border-t border-[#BDBDBD]"
                >
                  <AccordionTrigger>Q1: How does it work?</AccordionTrigger>
                  <AccordionContent>
                    Inhaling on the diffuser will turn the inside liquids
                    (melatonin, lavender, chamomile) into a light mist which you
                    inhale, and then exhale out your nose. Inhaling the
                    melatonin allows for a near-instant effect, and also allows
                    you to experience the soothing aromatherapeutic effect of
                    lavender and chamomile.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Q2: Why inhale melatonin?</AccordionTrigger>
                  <AccordionContent>
                    Inhaling on the diffuser will turn the inside liquids
                    (melatonin, lavender, chamomile) into a light mist which you
                    inhale, and then exhale out your nose. Inhaling the
                    melatonin allows for a near-instant effect, and also allows
                    you to experience the soothing aromatherapeutic effect of
                    lavender and chamomile.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    Q3: How much melatonin is there per inhale?
                  </AccordionTrigger>
                  <AccordionContent>
                    Inhaling on the diffuser will turn the inside liquids
                    (melatonin, lavender, chamomile) into a light mist which you
                    inhale, and then exhale out your nose. Inhaling the
                    melatonin allows for a near-instant effect, and also allows
                    you to experience the soothing aromatherapeutic effect of
                    lavender and chamomile.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    Q4: Is it an e-cigarette or tobacco product?
                  </AccordionTrigger>
                  <AccordionContent>
                    Inhaling on the diffuser will turn the inside liquids
                    (melatonin, lavender, chamomile) into a light mist which you
                    inhale, and then exhale out your nose. Inhaling the
                    melatonin allows for a near-instant effect, and also allows
                    you to experience the soothing aromatherapeutic effect of
                    lavender and chamomile.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Q5: What&apos;s in it? </AccordionTrigger>
                  <AccordionContent>
                    Inhaling on the diffuser will turn the inside liquids
                    (melatonin, lavender, chamomile) into a light mist which you
                    inhale, and then exhale out your nose. Inhaling the
                    melatonin allows for a near-instant effect, and also allows
                    you to experience the soothing aromatherapeutic effect of
                    lavender and chamomile.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>Q6: What&apos;s not in it?</AccordionTrigger>
                  <AccordionContent>
                    Inhaling on the diffuser will turn the inside liquids
                    (melatonin, lavender, chamomile) into a light mist which you
                    inhale, and then exhale out your nose. Inhaling the
                    melatonin allows for a near-instant effect, and also allows
                    you to experience the soothing aromatherapeutic effect of
                    lavender and chamomile.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger>
                    Q7: How long does it last?
                  </AccordionTrigger>
                  <AccordionContent>
                    Inhaling on the diffuser will turn the inside liquids
                    (melatonin, lavender, chamomile) into a light mist which you
                    inhale, and then exhale out your nose. Inhaling the
                    melatonin allows for a near-instant effect, and also allows
                    you to experience the soothing aromatherapeutic effect of
                    lavender and chamomile.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                  <AccordionTrigger>
                    Q8: How do I know it has run out/died?
                  </AccordionTrigger>
                  <AccordionContent>
                    Inhaling on the diffuser will turn the inside liquids
                    (melatonin, lavender, chamomile) into a light mist which you
                    inhale, and then exhale out your nose. Inhaling the
                    melatonin allows for a near-instant effect, and also allows
                    you to experience the soothing aromatherapeutic effect of
                    lavender and chamomile.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
            <TabsContent value="melantonin">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem
                  value="item-1"
                  className="border-t border-[#BDBDBD]"
                >
                  <AccordionTrigger>Q1: How does it work?</AccordionTrigger>
                  <AccordionContent>
                    Inhaling on the diffuser will turn the inside liquids
                    (melatonin, lavender, chamomile) into a light mist which you
                    inhale, and then exhale out your nose. Inhaling the
                    melatonin allows for a near-instant effect, and also allows
                    you to experience the soothing aromatherapeutic effect of
                    lavender and chamomile.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Q2: Why inhale melatonin?</AccordionTrigger>
                  <AccordionContent>
                    Inhaling on the diffuser will turn the inside liquids
                    (melatonin, lavender, chamomile) into a light mist which you
                    inhale, and then exhale out your nose. Inhaling the
                    melatonin allows for a near-instant effect, and also allows
                    you to experience the soothing aromatherapeutic effect of
                    lavender and chamomile.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    Q3: How much melatonin is there per inhale?
                  </AccordionTrigger>
                  <AccordionContent>
                    Inhaling on the diffuser will turn the inside liquids
                    (melatonin, lavender, chamomile) into a light mist which you
                    inhale, and then exhale out your nose. Inhaling the
                    melatonin allows for a near-instant effect, and also allows
                    you to experience the soothing aromatherapeutic effect of
                    lavender and chamomile.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    Q4: Is it an e-cigarette or tobacco product?
                  </AccordionTrigger>
                  <AccordionContent>
                    Inhaling on the diffuser will turn the inside liquids
                    (melatonin, lavender, chamomile) into a light mist which you
                    inhale, and then exhale out your nose. Inhaling the
                    melatonin allows for a near-instant effect, and also allows
                    you to experience the soothing aromatherapeutic effect of
                    lavender and chamomile.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Q5: What&apos;s in it? </AccordionTrigger>
                  <AccordionContent>
                    Inhaling on the diffuser will turn the inside liquids
                    (melatonin, lavender, chamomile) into a light mist which you
                    inhale, and then exhale out your nose. Inhaling the
                    melatonin allows for a near-instant effect, and also allows
                    you to experience the soothing aromatherapeutic effect of
                    lavender and chamomile.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>Q6: What&apos;s not in it?</AccordionTrigger>
                  <AccordionContent>
                    Inhaling on the diffuser will turn the inside liquids
                    (melatonin, lavender, chamomile) into a light mist which you
                    inhale, and then exhale out your nose. Inhaling the
                    melatonin allows for a near-instant effect, and also allows
                    you to experience the soothing aromatherapeutic effect of
                    lavender and chamomile.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger>
                    Q7: How long does it last?
                  </AccordionTrigger>
                  <AccordionContent>
                    Inhaling on the diffuser will turn the inside liquids
                    (melatonin, lavender, chamomile) into a light mist which you
                    inhale, and then exhale out your nose. Inhaling the
                    melatonin allows for a near-instant effect, and also allows
                    you to experience the soothing aromatherapeutic effect of
                    lavender and chamomile.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                  <AccordionTrigger>
                    Q8: How do I know it has run out/died?
                  </AccordionTrigger>
                  <AccordionContent>
                    Inhaling on the diffuser will turn the inside liquids
                    (melatonin, lavender, chamomile) into a light mist which you
                    inhale, and then exhale out your nose. Inhaling the
                    melatonin allows for a near-instant effect, and also allows
                    you to experience the soothing aromatherapeutic effect of
                    lavender and chamomile.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
          </TabsList>
        </Tabs>
      </div>
    </>
  );
};

export default Faq;
